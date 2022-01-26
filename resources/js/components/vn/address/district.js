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
            $(countCopy[i]).html(countCopy[i].innerHTML +'<a class="clickCopy" href="javascript:void(0)"><i class="fas fa-copy"></i></a>');
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
        <h1>Quận huyện</h1>
        <hr/>
        <p>Xem tất cả danh mục quận huyện</p>
        <div className="customLink get copy">
            https://azexpress.com.vn/wp-json/api/v1/get-address?address=district
        </div>
        <p>Quận huyện theo khu vực tỉnh thành</p>
        <div className="customLink get copy">
            https://azexpress.com.vn/wp-json/api/v1/get-address?address=district&label=[ID Tỉnh/Thành phố]
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
                    <td>label</td>
                    <td>string</td>
                    <td>Tên của tỉnh thành phố</td>
                </tr>
                <tr>
                    <td>value</td>
                    <td>string</td>
                    <td>ID tỉnh thành phố</td>
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