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
        <h1>Hỗ trợ</h1>
        <hr/>
        <p>Vui lòng liên hệ với bộ phận hỗ trợ kinh doanh để được cung cấp tài khoản kiểm thử.</p>
        <code className="customText">
            Liện hệ Zalo : 0962 640 068  (Nguyễn Hoàng Phương)
        </code>
    </div>
}
export default View;