// ==UserScript==
// @name     IVG ad-block unblock
// @version  1
// @match    https://*.ivg.it/*
// @grant    none
// ==/UserScript==
(function() {
  
    console.debug(`IVG AD-Block unblock loaded.`);
      
    const targetNode = document.getElementsByTagName("BODY")[0];
        
    const config = { attributes: true, childList: false, subtree: false };
    
    const callback = (mutationList, observer) => {
      for (const mutation of mutationList) {
            if (mutation.type === "attributes" 
            && mutation.attributeName == "class" 
            && targetNode.classList.contains('blk-detected')){
                  
          targetNode.classList.remove('blk-detected');
          //console.debug(`The 'blk-detected' class in ${mutation.attributeName}was removed.`);
        }
      }
    };
    
    const observer = new MutationObserver(callback);
       
    observer.observe(targetNode, config);
      
    //observer.disconnect();
    
      
    })()