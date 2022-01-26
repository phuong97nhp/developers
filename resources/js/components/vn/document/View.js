import $ from "jquery";

function View() {
    $(document).ready(function() {
        $('#menuTitle').text($('h1').text());
        var subContent = $('#subContent h4');
        var htmlMenu = '<ul>';
        for (let i = 0; i < subContent.length; i++) { 
            $(subContent[i]).html('<a id="menu'+i+'" href="javascript:void(0)">'+subContent[i].textContent+'</a>');
            htmlMenu += '<li><a href="#menu'+i+'">'+subContent[i].textContent+'</a></li>';
        }
        $('#menuContent').html(htmlMenu);
    });
    return <div>
       
       <h1>Thông tin cơ bản</h1>
        <hr/>
       <h4>Hình thức vận chuyển</h4>
       <div className="customText">
            CPN: Chuyển Phát Nhanh <br/>
            HCPN: Chuyển Phát Hỏa Tốc <br/>
            PT9H: Phát trước 9h <br/>
            PTN: Phát trong ngày <br/>
            ĐB: Vận chuyển theo đường bộ
        </div>
       <h4>Tính chất cơ bản của API</h4>
       <table className="table table-bordered table-sm">
            <thead>
            <tr>
                <th>Đặc tính</th>
                <th>Miêu tả</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>success</td>
                <td>Trạng thái request (true: thành công, false: thất bại)</td>
            </tr>
            <tr>
                <td>status</td>
                <td>Mã trạng thái</td>
            </tr>
            <tr>
                <td>messenger</td>
                <td>Thông báo trạng thái</td>
            </tr>
            <tr>
                <td>data</td>
                <td>Dữ liệu trả về khi thực thi</td>
            </tr>
            </tbody>
        </table>
        <h4>TRACKING API KEY</h4> 
        <div className="customText">
            Để lấy apikey, thực hiện các bước như sau: <br/>
            Liện hệ Zalo để nhận KEY: 0962 640 068 (Nguyễn Hoàng Phương)
        </div>
    </div>
}
export default View;