import React from 'react'

const TawkTo = () => {
  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();

  function Tawk(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/64838db6cc26a871b021a091/1h2gu3503';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
  }

  return (
    <div>TawkTo</div>
  )
}

export default TawkTo