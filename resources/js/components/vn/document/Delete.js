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
       
       <h1>Xóa đơn vận</h1>
       <p>Tracking đơn vận. Số lần tracking không vượt quá 3.000.000 lần/ngày.</p>
       <hr/>
       
       <h4>Request URI</h4>
       <div className="customLink get copy" title="Click để sao chép">
            https://azexpress.com.vn/wp-json/api/v2/delete-order?code=[Mã đơn vận]&api_key=[Token riêng]
        </div>  
        <div className="customText">
            code: Mã đơn vận <br/>
            apiKey: Key do phía Muôn Phương cung cấp
        </div>
       <h4>Xem thêm</h4>
       <div className="customText">
            Để hiểu hơn cần xem thông tin cơ bản: <Link to="/thong-tin-co-ban">Thông tin cơ bản</Link> <br/>
        </div>
    </div>
}
export default View;