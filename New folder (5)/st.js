 
   function showCatFact() {
  const facts = [
    "القطط تمضي حوالي 70% من حياتها نائمة!",
    "تستطيع القطط إصدار أكثر من 100 صوت مختلف.",
    "القلب لدى القطط ينبض بمعدل أسرع من قلب الإنسان.",
    "القطط تحب الأماكن المرتفعة وتشعر بالأمان فيها.",
    "تلعق القطط فراءها لتنظيم درجة حرارتها."
  ];
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  alert(randomFact);
}
//:عند الكبس علىاعطيني معلومات عن القطه بضهر معلومات اعلا الصفحه//
    


  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
//:لزر يلي بودي لفوق//