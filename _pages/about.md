---
layout: about
title: About
permalink: /
subtitle: <a href="https://shanghai.nyu.edu/">NYU Shanghai</a>. Senior Undergraduate. Honors Mathematics & Data Science(AI).

profile:
  align: right
  image: profile/prof_pic_1.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>Email: kl4747@nyu.edu</p>
    <p>Shanghai, New York</p>

news: true # includes a list of news items
selected_papers: false # includes a list of papers marked as "selected={true}"
social: false # includes social icons at the bottom of the page
---

{% include social_inline.liquid %}

My name is Kehan(Genghis) Luo (骆可瀚), and I am currently a senior undergraduate at <a href="https://shanghai.nyu.edu/">NYU Shanghai</a>, pursuing a double major in Honors Mathematics and Data Science(AI track). I am deeply passionate about the future of machine learning and have conducted research in areas such as diffusion models, high-dimensional sampling, and learning theory, exploring both theoretical and practical approaches. Additionally, I am highly interested in applying machine learning techniques to various fields including medical treatment, finance, etc.

<script>
// 强制刷新图片选择
(function() {
  // 确保DOM完全加载
  function init() {
    console.log("[ProfilePic] 初始化中...");
    
    // 添加调试信息到页面（隐藏）
    const debugDiv = document.createElement('div');
    debugDiv.style.display = 'none';
    debugDiv.id = 'profile-debug';
    document.body.appendChild(debugDiv);
    
    function log(msg) {
      console.log("[ProfilePic] " + msg);
      const logEl = document.createElement('p');
      logEl.textContent = new Date().toISOString() + ": " + msg;
      debugDiv.appendChild(logEl);
    }
    
    // 尝试多种方法找到个人资料区域
    let profileDiv = null;
    let profileImg = null;
    
    // 有序尝试多种选择器
    const profileSelectors = [
      '.profile',
      'header .profile',
      'main .profile',
      '[class*="profile"]'
    ];
    
    for (const selector of profileSelectors) {
      const found = document.querySelector(selector);
      if (found) {
        profileDiv = found;
        log(`找到个人资料区: ${selector}`);
        break;
      }
    }
    
    if (!profileDiv) {
      log("错误: 无法找到个人资料区域");
      return;
    }
    
    // 找到现有图片元素
    const imgSelectors = [
      'img',
      'img[src*="prof_pic"]',
      'img[src*="profile"]'
    ];
    
    for (const selector of imgSelectors) {
      const found = profileDiv.querySelector(selector);
      if (found) {
        profileImg = found;
        log(`找到图片元素: ${selector}`);
        break;
      }
    }
    
    if (!profileImg) {
      // 尝试在全文档中查找
      for (const selector of imgSelectors) {
        const found = document.querySelector(selector);
        if (found && (found.src.includes('profile') || found.src.includes('prof_pic'))) {
          profileImg = found;
          log(`在文档中找到图片: ${selector}`);
          break;
        }
      }
    }
    
    if (!profileImg) {
      log("错误: 无法找到个人资料图片");
      return;
    }
    
    log(`当前图片路径: ${profileImg.src}`);
    
    // 获取当前图片信息
    const currentSrc = profileImg.src;
    const imgPathMatch = currentSrc.match(/(.+\/)prof_pic_(\d)\.jpg/);
    
    if (!imgPathMatch) {
      log(`错误: 无法解析图片路径: ${currentSrc}`);
      return;
    }
    
    const basePath = imgPathMatch[1];
    const currentNum = parseInt(imgPathMatch[2]);
    log(`图片基本路径: ${basePath}, 当前图片编号: ${currentNum}`);
    
    // 确定目标图片编号 (交替1和2)
    const targetNum = currentNum === 1 ? 2 : 1;
    log(`目标图片编号: ${targetNum}`);
    
    // 创建强制更新函数
    function forceUpdateProfilePic(picNum) {
      // 创建新图片元素
      const newImg = document.createElement('img');
      
      // 设置随机缓存破坏参数
      const cacheBuster = `?nocache=${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
      newImg.src = `${basePath}prof_pic_${picNum}.jpg${cacheBuster}`;
      
      // 复制原始图片的所有属性
      for (const attr of profileImg.attributes) {
        if (attr.name !== 'src') {
          newImg.setAttribute(attr.name, attr.value);
        }
      }
      
      // 用于记录加载状态的处理程序
      newImg.onload = function() {
        log(`新图片加载成功: prof_pic_${picNum}.jpg`);
      };
      
      newImg.onerror = function() {
        log(`错误: 无法加载图片: prof_pic_${picNum}.jpg`);
        // 如果加载失败，尝试另一张图片
        const fallbackNum = picNum === 1 ? 2 : 1;
        log(`尝试备用图片: prof_pic_${fallbackNum}.jpg`);
        newImg.src = `${basePath}prof_pic_${fallbackNum}.jpg${cacheBuster}`;
      };
      
      // 完全替换原始图片元素
      profileImg.parentNode.replaceChild(newImg, profileImg);
      log("已替换图片元素");
      
      // 更新引用
      profileImg = newImg;
    }
    
    // 添加"切换个人资料图片"按钮
    function addToggleButton() {
      // 创建按钮
      const btn = document.createElement('button');
      btn.textContent = 'Swap Profile Pic';
      btn.style.marginTop = '10px';
      btn.style.padding = '5px';
      btn.style.fontSize = '12px';
      btn.style.cursor = 'pointer';
      btn.style.display = 'block';
      btn.style.width = '100%';
      btn.style.boxSizing = 'border-box';
      btn.style.textAlign = 'center';
      
      // 添加点击事件
      btn.onclick = function() {
        const currentPath = profileImg.src;
        const currentMatch = currentPath.match(/prof_pic_(\d)\.jpg/);
        
        if (!currentMatch) {
          log("错误: 无法从当前图片确定编号");
          return;
        }
        
        const currentNum = parseInt(currentMatch[1]);
        const newNum = currentNum === 1 ? 2 : 1;
        forceUpdateProfilePic(newNum);
      };
      
      // 添加到个人资料区域
      profileDiv.appendChild(btn);
      log("已添加切换按钮");
    }
    
    // 添加一个按钮用于手动切换
    addToggleButton();
    
    // 根据Cookie状态确定是否要切换图片
    function determineImageFromCookie() {
      // 获取当前cookie中的图片状态
      let shouldSwitch = false;
      
      // 读取cookie
      const cookies = document.cookie.split(';');
      let profileState = null;
      
      for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === 'profilePicState') {
          profileState = value;
          break;
        }
      }
      
      // 如果有保存的状态，检查是否需要切换
      if (profileState) {
        const savedNum = parseInt(profileState);
        shouldSwitch = savedNum !== currentNum;
        log(`Cookie中保存的图片: ${savedNum}, 当前图片: ${currentNum}, 需要切换: ${shouldSwitch}`);
      } else {
        // 首次加载，只要保存当前状态
        log("无Cookie状态，初始设置");
        shouldSwitch = false;
      }
      
      // 总是更新cookie到当前状态的对立状态，这样下次加载就会切换
      const nextState = currentNum === 1 ? 2 : 1;
      document.cookie = `profilePicState=${nextState}; path=/; max-age=31536000`;
      log(`设置Cookie状态为下次显示: ${nextState}`);
      
      return shouldSwitch;
    }
    
    // 检查页面加载计数器以决定是否切换图片
    function checkPageLoadCount() {
      // 获取或初始化页面加载计数器
      let pageLoadCount = parseInt(sessionStorage.getItem('pageLoadCount') || '0');
      pageLoadCount++;
      sessionStorage.setItem('pageLoadCount', pageLoadCount.toString());
      
      log(`页面加载次数: ${pageLoadCount}`);
      
      // 奇数次数加载切换到图片2，偶数次数加载切换到图片1
      const targetPic = pageLoadCount % 2 === 0 ? 1 : 2;
      const shouldSwitch = targetPic !== currentNum;
      
      log(`目标图片应为: ${targetPic}, 需要切换: ${shouldSwitch}`);
      
      return shouldSwitch;
    }
    
    // 默认使用页面加载计数器方法
    if (checkPageLoadCount()) {
      log("基于页面加载计数器切换图片");
      forceUpdateProfilePic(targetNum);
    }
  }
  
  // 使用多种方法确保脚本运行
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function() {
      setTimeout(init, 500);
    });
  } else {
    setTimeout(init, 500);
  }
  
  // 也在页面完全加载后运行以确保图片加载
  window.addEventListener("load", function() {
    setTimeout(init, 1000);
  });
})();
</script>

