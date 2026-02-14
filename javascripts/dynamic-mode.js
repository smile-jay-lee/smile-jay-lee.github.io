document.addEventListener("DOMContentLoaded", function () {
  // 找到导航栏里的“动态模式”链接
  const navLinks = document.querySelectorAll(".md-nav__link");
  
  navLinks.forEach(link => {
    if (link.textContent.includes("动态模式")) {
      link.addEventListener("click", function(e) {
        e.preventDefault(); // 阻止默认跳转
        
        // 创建一个简单的提示框 (Toast)
        const toast = document.createElement("div");
        toast.textContent = "🚀 动态模式 (React App) 正在秘密开发中，敬请期待...";
        toast.style.position = "fixed";
        toast.style.bottom = "20px";
        toast.style.right = "20px";
        toast.style.backgroundColor = "#333";
        toast.style.color = "#fff";
        toast.style.padding = "12px 24px";
        toast.style.borderRadius = "4px";
        toast.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
        toast.style.zIndex = "9999";
        toast.style.transition = "opacity 0.3s";
        
        document.body.appendChild(toast);
        
        // 3秒后自动消失
        setTimeout(() => {
          toast.style.opacity = "0";
          setTimeout(() => document.body.removeChild(toast), 300);
        }, 3000);
      });
    }
  });
});