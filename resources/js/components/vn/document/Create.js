import $ from "jquery";
import { Link } from "react-router-dom";

function Create() {
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
        <h1>Tạo đơn vận</h1>
        <hr/>

        <h4>Request URI</h4>
        <div className="customLink post copy">
        azexpress.com.vn/wp-json/api/v2/add-order
        </div> 
        <h4>Dữ liệu đầu vào</h4>
        <div className="customCode copy">
            <span className="text-warning">city</span>:79 <br/>
            <span className="text-warning">district</span>:763<br/>
            <span className="text-warning">ward</span>:26845<br/>
            <span className="text-warning">address</span>:đường 22 cuối hẻm 1C<br/>
            <span className="text-warning">full_name_b2c</span>:Nguyễn Văn A <br/>
            <span className="text-warning">full_name_b2b</span>:Nguyễn Văn B <br/>
            <span className="text-warning">phone_b2c</span>:0962640xxx<br/>
            <span className="text-danger">collection_money</span>:10000<br/>
            <span className="text-danger">code_b2c</span>:10000021236666<br/>
            <span className="text-danger">content</span>: alo trươc 30'<br/>
            <span className="text-warning">type</span>:CPN<br/>
            <span className="text-warning">phone_b2b</span>:0869847865<br/>
            <span className="text-warning">address_b2b</span>:64-66 Thăng Long,  Phường 2, Quận Bình Tân,  Thành Phố Hồ Chí Minh<br/>
            <span className="text-danger">code</span>:LRL10000002<br/>
            <span className="text-danger">order_value</span>: 10000000<br/>
            <span className="text-warning">api_key</span>:[Token riêng]<br/>
        </div>
        <div className="customCode">
            <span className="text-warning">Bắt buộc</span><br/>
            <span className="text-danger">Không yêu cầu</span>
        </div>
       <h4>Id khu vực</h4>
       <div className="customText">
            Tỉnh thành Phố: <Link to="/tinh-thanh-pho">Xem id</Link> <br/>
            Quận huyện: <Link to="/quan-huyen">Xem id</Link> <br/>
            Xã phường: <Link to="/xa-phuong">Xem id</Link> <br/>
        </div>
        
       <h4>Xem thêm</h4>
       <div className="customText">
            Để hiểu hơn cần xem thông tin cơ bản: <Link to="/thong-tin-co-ban">Thông tin cơ bản</Link> <br/>
        </div>
    </div>
}
export default Create;