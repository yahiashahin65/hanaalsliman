document.getElementById('shareBtn').addEventListener('click', () => {
    if (navigator.share) {
        navigator.share({
            title: 'H.Slaiman Portfolio',
            text: 'تابعوا أحدث أعمال H.Slaiman',
            url: window.location.href
        }).then(() => {
            console.log('تمت المشاركة بنجاح');
        }).catch((error) => {
            console.log('خطأ في المشاركة', error);
        });
    } else {
        alert("متصفحك لا يدعم خاصية المشاركة المباشرة، قم بنسخ الرابط يدوياً.");
    }
});