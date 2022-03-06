function validateForm()
{
    if(document.form2.fname.value=="")
    {
       alert("Enter Your Name");
       return false;
    }

    if(document.form2.email.value=="")
    {
        alert("Email Required");
        return false;
    }

    if(document.form2.describetopic.value=="")
    {
        
       alert("Describe Your Topic");
       return false;
    }
alert("Submitted"); 
    return true;
}