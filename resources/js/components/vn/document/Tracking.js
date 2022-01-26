import $ from "jquery";
import { Link } from "react-router-dom";

function View() {

    $(document).ready(function() {
        $('body').delegate('.clickCopy', 'click', function() {
            $(this).attr('title', 'Đã sao chép');
            $(this).css('color', 'red');
            var content = $(this).parent('.copy').text();
            copyToClipboard(content);
        });
        function copyToClipboard(text) {
            var dummy = document.createElement("textarea");
            document.body.appendChild(dummy);
            dummy.value = text;
            dummy.select();
            document.execCommand("copy");
            document.body.removeChild(dummy);
        }

        var countCopy = $('.copy');
        for (let i = 0; i < countCopy.length; i++) {
            $(countCopy[i]).html(countCopy[i].textContent+'<a class="clickCopy" href="javascript:void(0)"><i class="fas fa-copy"></i></a>');
        }
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
       
       <h1>Tracking đơn vận</h1>
       <p>Tracking đơn vận. Số lần tracking không vượt quá 3.000.000 lần/ngày.</p>
       <hr/>
       
       <h4>Request URI</h4>
       <div className="customLink get copy" title="Click để sao chép">
            https://azexpress.com.vn/wp-json/api/v2/tracking-order?code=[Mã đơn vận]&api_key=[Token riêng]
        </div>  
        <div className="customText">
            code: Mã đơn vận <br/>
            apiKey: Key do phía Muôn Phương cung cấp
        </div>
        <h4>Tính chất dữ liệu</h4>
        <table className="table table-bordered table-sm">
            <thead>
                <tr>
                    <th>Đặc tính</th>
                    <th>Kiểu dữ liệu</th>
                    <th>Miêu tả</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>code</td>
                    <td>string</td>
                    <td>Mã đơn vận</td>
                </tr>
                <tr>
                    <td>code_b2b</td>
                    <td>string</td>
                    <td>Mã khách hàng</td>
                </tr>
                <tr>
                    <td>code_b2c</td>
                    <td>string</td>
                    <td>Mã đơn hàng theo từng sản phẩm</td>
                </tr>
                <tr>
                    <td>full_name_b2b</td>
                    <td>string</td>
                    <td>Tên người gửi</td>
                </tr>
                <tr>
                    <td>phone_b2b</td>
                    <td>string</td>
                    <td>Số điện thoại người gửi</td>
                </tr>
                <tr>
                    <td>address_b2b</td>
                    <td>string</td>
                    <td>Địa chỉ người gửi</td>
                </tr>
                <tr>
                    <td>full_name_b2c</td>
                    <td>string</td>
                    <td>Tên người nhận</td>
                </tr>
                <tr>
                    <td>phone_b2c</td>
                    <td>string</td>
                    <td>Số điện thoại người nhận</td>
                </tr>
                <tr>
                    <td>address_b2c</td>
                    <td>string</td>
                    <td>Địa chỉ người nhận</td>
                </tr>
                <tr>
                    <td>weight</td>
                    <td>int</td>
                    <td>Trọng lượng (gram)</td>
                </tr>
                <tr>
                    <td>package</td>
                    <td>int</td>
                    <td>Số kiện</td>
                </tr>
                <tr>
                    <td>content</td>
                    <td>string</td>
                    <td>Yêu cầu khi vận chuyển</td>
                </tr>
                <tr>
                    <td>type</td>
                    <td>string</td>
                    <td>Phương thức vận chuyển</td>
                </tr>
                <tr>
                    <td>extracharge</td>
                    <td>int</td>
                    <td>Phụ phí khác</td>
                </tr>
                <tr>
                    <td>totalcharge</td>
                    <td>int</td>
                    <td>Tổng phí</td>
                </tr>
                <tr>
                    <td>collection_money</td>
                    <td>int</td>
                    <td>Phí thu hộ</td>
                </tr>
                <tr>
                    <td>created_date</td>
                    <td>string</td>
                    <td>Ngày tạo đơn vận</td>
                </tr>
                <tr>
                    <td>date_receive</td>
                    <td>string</td>
                    <td>Thời gian nhận hàng</td>
                </tr>
                <tr>
                    <td>order_value</td>
                    <td>int</td>
                    <td>Giá trị đơn hàng</td>
                </tr>
                <tr>
                    <td>total_money</td>
                    <td>int</td>
                    <td>Tổng cước</td>
                </tr>
                <tr>
                    <td>receiver_name</td>
                    <td>string</td>
                    <td>Tên người nhận</td>
                </tr>
                <tr>
                    <td>images</td>
                    <td>json</td>
                    <td>Hình ảnh</td>
                </tr>
                <tr>
                    <td>status</td>
                    <td>string</td>
                    <td>Trạng thái đơn hàng hiện thời</td>
                </tr>
                <tr>
                    <td>reason</td>
                    <td>string</td>
                    <td>Lý do hủy</td>
                </tr>
                <tr>
                    <td>tracking</td>
                    <td>json</td>
                    <td>Trạng thái đơn hàng theo thời gian</td>
                </tr>
            </tbody>
        </table>
       <h4>Xem thêm</h4>
       <div className="customText">
            Để hiểu hơn cần xem thông tin cơ bản: <Link to="/thong-tin-co-ban">Thông tin cơ bản</Link> <br/>
        </div>
    </div>
}
export default View;