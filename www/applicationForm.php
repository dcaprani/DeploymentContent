<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns = "http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-type" content="text/html;charset=ISO-8859-1 " />
<title>TTC Application Form</title>
<link rel="stylesheet" type="text/css" href="TTCStyle.css" />
<script src="lib/jquery.js"></script>
<script src="dist/jquery.validate.js"></script>
<script>
/*<!--$.validator.setDefaults({
	submitHandler: function() { alert("submitted!"); }
});-->*/

$().ready(function() {
	// validate the comment form when it is submitted
	//$("#sammy").validate();

	// validate signup form on keyup and submit
	$("#sammy").validate({
		rules: {
			firstname: "required",
			lastname: "required",
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			firstname: "Please enter your First Name",
			lastname: "Please enter your Last Name",
			email: "Please enter a valid email address"
		}
	});

	// propose username by combining first- and lastname
	/*$("#username").focus(function() {
		var firstname = $("#firstname").val();
		var lastname = $("#lastname").val();
		if(firstname && lastname && !this.value) {
			this.value = firstname + "." + lastname;
		}
	});*/

	//code to hide topic selection, disable for demo
	//**var newsletter = $("#newsletter");**
	// newsletter topics are optional, hide at first
	//**var inital = newsletter.is(":checked");**
	//**var topics = $("#newsletter_topics")[inital ? "removeClass" : "addClass"]("gray");
	//**var topicInputs = topics.find("input").attr("disabled", !inital);
	// show when newsletter is checked
	/*newsletter.click(function() {
		topics[this.checked ? "removeClass" : "addClass"]("gray");
		topicInputs.attr("disabled", !this.checked);
	});*/
});
</script>
<!--<script language="JavaScript" type="text/javascript">
			function validateForm(form){
			  if (form.first_name.value == ""||form.last_name.value == "") {
			    alert( "The First Name and Last Name fields are required fields." );
			    form.email.focus();
			    return false;
			  }
			  return true;
			}
</script>-->
</head>
<body>
<div id = "app_form">
<?php echo "Hello World!"?>
<form class="cmxform" id = "sammy" name="franny" method="post" action="insert.php">

<table align="center" frame="box" border="0">
<caption><font size="4"><b><u>TTC Membership Application Form</u></b></font></caption>
	<tr>
		<td colspan="2">First Name:</td><td>&nbsp;</td>
		<td colspan="7" align="left"><input type="text" id="firstname" name="firstname" size="50" required /></td>
	</tr>
	<tr>
		<td colspan="2">Last Name:</td><td>&nbsp;</td>
		<td colspan="7" align="left"><input type="text" id="lastname"  name="lastname" size="50" required /></td>
	</tr>
	<tr>
		<td colspan="2">Mobile :</td>
		<td colspan="2" align="right"><select name="prefix">
						<option value="083">083</option>
						<option value="085">085</option>
						<option value="086">086</option>
						<option value="087">087</option>
						<option value="089">089</option>
						</select></td>
		<td colspan="6" align="left"><input type="text" name="mobile" size="39" /></td>
	</tr>
	<tr>
		<td colspan="2">E-Mail:</td><td>&nbsp;</td>
		<td colspan="7" align="left"><input type="text" id = "email" name="email" size="50" required /></td>
	</tr>
	<tr>
		<td colspan="10">Comments</td>
	</tr>
	<tr>
		<td colspan="10" align="left"><textarea rows="5" cols="55"></textarea></td>
	</tr>
	<tr>
		<td colspan="5" align="left"><input class = "submit" type="submit" name="send" value="Press to send data" /></td>
		<td colspan="5" align="left"><input id = "welcome" disabled  type = "button" class = "welcome" type="" name="send" value="Welcome" /></td>
		<td colspan="5" align="right"><input type="reset" name="reset" value="Clear" /></td>
	</tr>
</table>
</form>
<!--<script src = "ajax.js"></script>
<script>
$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

$(function() {
    $('form').submit(function() {
		var data = JSON.stringify($('form').serializeObject())
        $('#result').text(data);
        return false;
    });
});
</script>-->

<pre id="result">
</pre>
</div>

</body>
</html>
