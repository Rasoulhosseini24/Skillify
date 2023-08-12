// for modal

 
document.querySelectorAll('.shopp').forEach(ee => {


    ee.addEventListener('click', () =>{
  
  
  
    document.querySelector(".bb").innerHTML = `<div class="modal-content">
    <div class="modal-header">
     <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="btn-close"></button>
     <h5 class="modal-title" id="exampleModalLabel">فرم درخواست خرید دوره های آموزشی</h5>
     </div>
  <div class="modal-body"> 
  <form id="fs-frm" name="registration-form" accept-charset="utf-8" action="https://formspree.io/f/mjvqglbj" method="post";> 
   <fieldset id="fs-frm-inputs">
     <label for="full-name">نام و نام خانوادگی</label>
     <input type="text" class="bg-dark opacity-50 text-white" name="name" id="full-name" placeholder="نام و نام خانوادگی" required="">
     <label for="email-address">آدرس ایمیل</label>
     <input type="email" class="bg-dark opacity-50 text-white" name="_replyto" id="email-address" placeholder="ایمیل" required="">
     <label for="telephone">تلفن همراه</label>
     <input type="telephone" class="bg-dark opacity-50 text-white" name="telephone" id="telephone" placeholder="۰۹۱۲۳۴۵۶۷۸۹" required="">
     <label for="street-address">آدرس</label>
     <input type="text" class="bg-dark opacity-50 text-white" name="street" id="street-address" placeholder="خیابان" required="">
     <fieldset class="locale">
       <legend>محل سکونت</legend>
       <input type="text" class="bg-dark opacity-50 text-white" name="city" placeholder="شهر" required="">
       <select name="state" class="bg-dark opacity-50 text-white" onChange="irancitylist(this.value);" required="">
         <option value="0">لطفا استان را انتخاب نمایید</option>
         <option value="تهران">تهران</option>
         <option value="گیلان">گیلان</option>
         <option value="آذربایجان شرقی">آذربایجان شرقی</option>
         <option value="خوزستان">خوزستان</option>
         <option value="فارس">فارس</option>
         <option value="اصفهان">اصفهان</option>
         <option value="خراسان رضوی">خراسان رضوی</option>
         <option value="قزوین">قزوین</option>
         <option value="سمنان">سمنان</option>
         <option value="قم">قم</option>
         <option value="مرکزی">مرکزی</option>
         <option value="زنجان">زنجان</option>
         <option value="مازندران">مازندران</option>
         <option value="گلستان">گلستان</option>
         <option value="اردبیل">اردبیل</option>
         <option value="آذربایجان غربی">آذربایجان غربی</option>
         <option value="همدان">همدان</option>
         <option value="کردستان">کردستان</option>
         <option value="کرمانشاه">کرمانشاه</option>
         <option value="لرستان">لرستان</option>
         <option value="بوشهر">بوشهر</option>
         <option value="کرمان">کرمان</option>
         <option value="هرمزگان">هرمزگان</option>
         <option value="چهارمحال و بختیاری">چهارمحال و بختیاری</option>
         <option value="یزد">یزد</option>
         <option value="سیستان و بلوچستان">سیستان و بلوچستان</option>
         <option value="ایلام">ایلام</option>
         <option value="کهگلویه و بویراحمد">کهگلویه و بویراحمد</option>
         <option value="خراسان شمالی">خراسان شمالی</option>
         <option value="خراسان جنوبی">خراسان جنوبی</option>
         <option value="البرز">البرز</option>
     </select>
       <input type="text" class="bg-dark opacity-50 text-white" name="postal-code" placeholder="کد پستی" required="">
     </fieldset>
     <label for="note">نوع دوره</label>
     <textarea class="bg-dark opacity-50 text-white" rows="2" name="note" id="note" placeholder="نوع دوره"></textarea>
     <input type="hidden" name="_subject" id="email-subject" value="Registration Form Submission">
   </fieldset>
   <a id="subbb"><input type="submit" class="btn btn-dark" value="خرید دوره"></a>
   <p id="my-form-status"></p>
  </form>
  </div>
  </div>
  `
  var form = document.getElementById("fs-frm");
  window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
  form.reset();
  }
  }
  
  
  async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "ممنون از پیام شما.در اصرع وقت بررسی خواهد شد.";
      status.classList.toggle('success')
     
      window.alert("از خرید شما متشکریم! لطفا رسید پرداخت را اینجا در صفحه تلگرامی که باز می شود ارسال کنید و روند خرید خود را در همان جا پیگیری کنید.")
     
     
      let statuss = document.getElementById("subbb")
     
      if( statuss=true){
  
        window.open('https://t.me/rasoul_hosseyni','_blank'); 
     }
      form.reset()
  
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "مشکلی پیش آمده است.لطفا اینترنت خود را بررسی کنید."
          status.classList.toggle('error')
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "مشکلی پیش آمده است.لطفا اینترنت خود را بررسی کنید."
    status.classList.toggle('error')
  });
  
  
  }
  form.addEventListener("submit", handleSubmit)
  
  return
  
  
  })
  
  
  
    
  });