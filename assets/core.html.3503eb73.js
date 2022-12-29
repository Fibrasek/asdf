import{_ as i,r as o,o as r,c as p,a as s,b as a,d as e,w as t,f as c,e as l}from"./app.81a23d55.js";const F={},h=s("h1",{id:"核心",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#核心","aria-hidden":"true"},"#"),a(" 核心")],-1),u=s("p",null,[a("核心 "),s("code",null,"asdf"),a(" 命令列表很小，但可以促进很多工作流。")],-1),y=s("h2",{id:"安装和配置",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#安装和配置","aria-hidden":"true"},"#"),a(" 安装和配置")],-1),m=l(`<h2 id="exec" tabindex="-1"><a class="header-anchor" href="#exec" aria-hidden="true">#</a> Exec</h2><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf </span><span style="color:#66D9EF;">exec</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">command</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> [args...]</span></span>
<span class="line"></span></code></pre></div><p>执行当前版本的命令垫片。</p>`,3),f=l(`<h2 id="env" tabindex="-1"><a class="header-anchor" href="#env" aria-hidden="true">#</a> Env</h2><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf env </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">command</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> [util]</span></span>
<span class="line"></span></code></pre></div>`,2),v=l(`<h2 id="info" tabindex="-1"><a class="header-anchor" href="#info" aria-hidden="true">#</a> Info</h2><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf info</span></span>
<span class="line"></span></code></pre></div><p>用于打印操作系统、Shell 和 <code>asdf</code> 调试信息的辅助命令。在报告 bug 时需要共享这些信息。</p><h2 id="reshim" tabindex="-1"><a class="header-anchor" href="#reshim" aria-hidden="true">#</a> Reshim</h2><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf reshim </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">name</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">version</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,5),b={href:"https://docs.npmjs.com/cli/",target:"_blank",rel:"noopener noreferrer"},g=s("code",null,"npm install -g yarn",-1),_={href:"https://yarnpkg.com/",target:"_blank",rel:"noopener noreferrer"},k=s("code",null,"asdf reshim nodejs <version>",-1),x=s("code",null,"nodejs",-1),E=s("code",null,"versions",-1),$=s("code",null,"yarn",-1),D=l(`<h2 id="shim-versions" tabindex="-1"><a class="header-anchor" href="#shim-versions" aria-hidden="true">#</a> Shim-versions</h2><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf shim-versions </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">command</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>列举为命令提供垫片的插件和版本。</p>`,3),H={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},O=s("code",null,"node",-1),M=s("code",null,"npm",-1),A={href:"https://github.com/asdf-vm/asdf-nodejs/",target:"_blank",rel:"noopener noreferrer"},w=s("code",null,"asdf-nodejs",-1),S=s("code",null,"插件安装了这些工具的很多版本时，执行",-1),R=l(`<div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">➜ asdf shim-versions node</span></span>
<span class="line"><span style="color:#F8F8F2;">nodejs 14.8.0</span></span>
<span class="line"><span style="color:#F8F8F2;">nodejs 14.17.3</span></span>
<span class="line"><span style="color:#F8F8F2;">nodejs 16.5.0</span></span>
<span class="line"></span></code></pre></div><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">➜ asdf shim-versions npm</span></span>
<span class="line"><span style="color:#F8F8F2;">nodejs 14.8.0</span></span>
<span class="line"><span style="color:#F8F8F2;">nodejs 14.17.3</span></span>
<span class="line"><span style="color:#F8F8F2;">nodejs 16.5.0</span></span>
<span class="line"></span></code></pre></div><h2 id="更新" tabindex="-1"><a class="header-anchor" href="#更新" aria-hidden="true">#</a> 更新</h2><p><code>asdf</code> 有一个依赖于 Git （我们推荐的安装方法）的内置命令用于更新。如果你使用了其他方法安装，则应按照该方法的步骤操作：</p>`,4),B=s("thead",null,[s("tr",null,[s("th",null,"方法"),s("th",null,"最新稳定版本"),s("th",null,[s("code",null,"master"),a(" 分支上的最新提交")])])],-1),I=s("tr",null,[s("td",null,"asdf (Git)"),s("td",null,[s("code",null,"asdf update")]),s("td",null,[s("code",null,"asdf update --head")])],-1),T=s("tr",null,[s("td",null,"Homebrew"),s("td",null,[s("code",null,"brew upgrade asdf")]),s("td",null,[s("code",null,"brew upgrade asdf --fetch-HEAD")])],-1),j=s("td",null,"Pacman",-1),G=s("code",null,"PKGBUILD",-1),q=s("br",null,null,-1),z={href:"https://wiki.archlinux.org/index.php/AUR_helpers",target:"_blank",rel:"noopener noreferrer"},C=s("td",null,null,-1),N=l(`<h2 id="卸载" tabindex="-1"><a class="header-anchor" href="#卸载" aria-hidden="true">#</a> 卸载</h2><p>根据以下步骤卸载 <code>asdf</code>：</p><details class="custom-container details"><summary>Bash &amp; Git</summary><ol><li>在 <code>~/.bashrc</code> 配置文件中移除生效 <code>asdf.sh</code> 和补全功能的行：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/asdf.sh</span></span>
<span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/completions/asdf.bash</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>移除 <code>$HOME/.asdf</code> 目录：</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf \${ASDF_DATA_DIR</span><span style="color:#F92672;">:-</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;">.asdf}</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>执行以下命令移除 <code>asdf</code> 所有配置文件：</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>
<span class="line"></span></code></pre></div></details><details class="custom-container details"><summary>Bash &amp; Git (macOS)</summary><ol><li>在 <code>~/.bash_profile</code> 配置文件中移除生效 <code>asdf.sh</code> 和补全功能的行：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/asdf.sh</span></span>
<span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/completions/asdf.bash</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>移除 <code>$HOME/.asdf</code> 目录：</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf \${ASDF_DATA_DIR</span><span style="color:#F92672;">:-</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;">.asdf}</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>执行以下命令移除 <code>asdf</code> 所有配置文件：</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>
<span class="line"></span></code></pre></div></details>`,4),P={class:"custom-container details"},Z=l(`<summary>Bash &amp; Homebrew</summary><ol><li>在 <code>~/.bashrc</code> 配置文件中移除生效 <code>asdf.sh</code> 和补全功能的行：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">$(brew --prefix asdf)</span><span style="color:#F8F8F2;">/libexec/asdf.sh</span></span>
<span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">$(brew --prefix asdf)</span><span style="color:#F8F8F2;">/etc/bash_completion.d/asdf.bash</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3),L={href:"https://docs.brew.sh/Shell-Completion#configuring-completions-in-bash",target:"_blank",rel:"noopener noreferrer"},V=l(`<ol start="2"><li>用包管理器卸载：</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">brew uninstall asdf --force</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>执行以下命令移除 <code>asdf</code> 所有配置文件：</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>
<span class="line"></span></code></pre></div>`,4),U={class:"custom-container details"},K=l(`<summary>Bash &amp; Homebrew (macOS)</summary><p>如果你正在使用 <strong>macOS Catalina 以及更新版本</strong>，默认的 shell 已经变成了 <strong>ZSH</strong>。如果你在 <code>~/.bash_profile</code> 文件中找不到任何配置，则可能位于 <code>~/.zshrc</code> 中。在这种情况下，请按照 ZSH 指南进行操作。</p><ol><li>在 <code>~/.bash_profile</code> 配置文件中移除生效 <code>asdf.sh</code> 和补全功能的行：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">$(brew --prefix asdf)</span><span style="color:#F8F8F2;">/libexec/asdf.sh</span></span>
<span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">$(brew --prefix asdf)</span><span style="color:#F8F8F2;">/etc/bash_completion.d/asdf.bash</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,4),Y={href:"https://docs.brew.sh/Shell-Completion#configuring-completions-in-bash",target:"_blank",rel:"noopener noreferrer"},J=l(`<ol start="2"><li>用包管理器卸载：</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">brew uninstall asdf --force</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>执行以下命令移除 <code>asdf</code> 所有配置文件：</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>
<span class="line"></span></code></pre></div>`,4),Q=l(`<details class="custom-container details"><summary>Bash &amp; Pacman</summary><ol><li>在 <code>~/.bashrc</code> 配置文件中移除生效 <code>asdf.sh</code> 和补全功能的行：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> /opt/asdf-vm/asdf.sh</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>用包管理器卸载：</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">pacman -Rs asdf-vm</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>移除 <code>$HOME/.asdf</code> 目录：</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf \${ASDF_DATA_DIR</span><span style="color:#F92672;">:-</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;">.asdf}</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>执行以下命令移除 <code>asdf</code> 所有配置文件：</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>
<span class="line"></span></code></pre></div></details><details class="custom-container details"><summary>Fish &amp; Git</summary><ol><li>在 <code>~/.config/fish/config.fish</code> 配置文件中移除生效 <code>asdf.fish</code> 的行：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">source</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.asdf/asdf.fish</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以及使用以下命令移除补全功能：</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/fish/completions/asdf.fish</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>移除 <code>$HOME/.asdf</code> 目录：</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf \${ASDF_DATA_DIR</span><span style="color:#F92672;">:-</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;">.asdf}</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>执行以下命令移除 <code>asdf</code> 所有配置文件：</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>
<span class="line"></span></code></pre></div></details><details class="custom-container details"><summary>Fish &amp; Homebrew</summary><ol><li>在 <code>~/.config/fish/config.fish</code> 配置文件中移除生效 <code>asdf.fish</code> 的行：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">source</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">&quot;(brew --prefix asdf)&quot;</span><span style="color:#F8F8F2;">/libexec/asdf.fish</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>用包管理器卸载：</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">brew uninstall asdf --force</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>执行以下命令移除 <code>asdf</code> 所有配置文件：</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>
<span class="line"></span></code></pre></div></details><details class="custom-container details"><summary>Fish &amp; Pacman</summary><ol><li>在 <code>~/.config/fish/config.fish</code> 配置文件中移除生效 <code>asdf.fish</code> 的行：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">source</span><span style="color:#F8F8F2;"> /opt/asdf-vm/asdf.fish</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>用包管理器卸载：</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">pacman -Rs asdf-vm</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>移除 <code>$HOME/.asdf</code> 目录：</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf \${ASDF_DATA_DIR</span><span style="color:#F92672;">:-</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;">.asdf}</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>执行以下命令移除 <code>asdf</code> 所有配置文件：</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>
<span class="line"></span></code></pre></div></details><details class="custom-container details"><summary>Elvish &amp; Git</summary><ol><li>在 <code>~/.config/elvish/rc.elv</code> 配置文件中移除使用 <code>asdf</code> 模块的行：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">use asdf _asdf</span><span style="color:#F92672;">;</span><span style="color:#F8F8F2;"> var asdf~ = $_asdf:asdf~</span></span>
<span class="line"><span style="color:#66D9EF;">set</span><span style="color:#F8F8F2;"> edit:completion:arg-completer[asdf] = $_asdf:arg-completer~</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>以及使用以下命令卸载 <code>asdf</code> 模块：</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -f </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib/asdf.elv</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>移除 <code>$HOME/.asdf</code> 目录：</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (</span><span style="color:#F92672;">!</span><span style="color:#F8F8F2;">=s $E:ASDF_DATA_DIR </span><span style="color:#E6DB74;">&quot;&quot;</span><span style="color:#F8F8F2;">) { rm -rf $E:ASDF_DATA_DIR } </span><span style="color:#F92672;">else</span><span style="color:#F8F8F2;"> { rm -rf </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.asdf }</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>执行以下命令移除 <code>asdf</code> 所有配置文件：</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>
<span class="line"></span></code></pre></div></details><details class="custom-container details"><summary>Elvish &amp; Homebrew</summary><ol><li>在 <code>~/.config/elvish/rc.elv</code> 配置文件中移除使用 <code>asdf</code> 模块的行：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">use asdf _asdf</span><span style="color:#F92672;">;</span><span style="color:#F8F8F2;"> var asdf~ = $_asdf:asdf~</span></span>
<span class="line"><span style="color:#66D9EF;">set</span><span style="color:#F8F8F2;"> edit:completion:arg-completer[asdf] = $_asdf:arg-completer~</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>以及使用以下命令卸载 <code>asdf</code> 模块：</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -f </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib/asdf.elv</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>用包管理器卸载：</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">brew uninstall asdf --force</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>执行以下命令移除 <code>asdf</code> 所有配置文件：</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>
<span class="line"></span></code></pre></div></details><details class="custom-container details"><summary>Elvish &amp; Pacman</summary><ol><li>在 <code>~/.config/elvish/rc.elv</code> 配置文件中移除使用 <code>asdf</code> 模块的行：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">use asdf _asdf</span><span style="color:#F92672;">;</span><span style="color:#F8F8F2;"> var asdf~ = $_asdf:asdf~</span></span>
<span class="line"><span style="color:#66D9EF;">set</span><span style="color:#F8F8F2;"> edit:completion:arg-completer[asdf] = $_asdf:arg-completer~</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>以及使用以下命令卸载 <code>asdf</code> 模块：</p><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -f </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/elvish/lib/asdf.elv</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>用包管理器卸载：</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">pacman -Rs asdf-vm</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>移除 <code>$HOME/.asdf</code> 目录：</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> (</span><span style="color:#F92672;">!</span><span style="color:#F8F8F2;">=s $E:ASDF_DATA_DIR </span><span style="color:#E6DB74;">&quot;&quot;</span><span style="color:#F8F8F2;">) { rm -rf $E:ASDF_DATA_DIR } </span><span style="color:#F92672;">else</span><span style="color:#F8F8F2;"> { rm -rf </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.asdf }</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>执行以下命令移除 <code>asdf</code> 所有配置文件：</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>
<span class="line"></span></code></pre></div></details><details class="custom-container details"><summary>ZSH &amp; Git</summary><ol><li>在 <code>~/.zshrc</code> 配置文件中移除生效 <code>asdf.sh</code> 和补全功能的行：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/asdf.sh</span></span>
<span class="line"><span style="color:#88846F;"># ...</span></span>
<span class="line"><span style="color:#F8F8F2;">fpath=(\${ASDF_DIR}/completions $fpath)</span></span>
<span class="line"><span style="color:#F8F8F2;">autoload -Uz compinit</span></span>
<span class="line"><span style="color:#F8F8F2;">compinit</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>或者</strong> ZSH 框架插件（如果用了的话）</p><ol start="2"><li>移除 <code>$HOME/.asdf</code> 目录：</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf \${ASDF_DATA_DIR</span><span style="color:#F92672;">:-</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;">.asdf}</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>执行以下命令移除 <code>asdf</code> 所有配置文件：</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>
<span class="line"></span></code></pre></div></details><details class="custom-container details"><summary>ZSH &amp; Homebrew</summary><ol><li>在 <code>~/.zshrc</code> 配置文件中移除生效 <code>asdf.sh</code> 的行：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> </span><span style="color:#E6DB74;">$(brew --prefix asdf)</span><span style="color:#F8F8F2;">/libexec/asdf.sh</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>用包管理器卸载：</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">brew uninstall asdf --force </span><span style="color:#F92672;">&amp;&amp;</span><span style="color:#F8F8F2;"> brew autoremove</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>执行以下命令移除 <code>asdf</code> 所有配置文件：</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>
<span class="line"></span></code></pre></div></details><details class="custom-container details"><summary>ZSH &amp; Pacman</summary><ol><li>在 <code>~/.zshrc</code> 配置文件中移除生效 <code>asdf.sh</code> 的行：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> /opt/asdf-vm/asdf.sh</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>用包管理器卸载：</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">pacman -Rs asdf-vm</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>移除 <code>$HOME/.asdf</code> 目录</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf \${ASDF_DATA_DIR</span><span style="color:#F92672;">:-</span><span style="color:#F8F8F2;">$HOME</span><span style="color:#F92672;">/</span><span style="color:#F8F8F2;">.asdf}</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>执行以下命令移除 <code>asdf</code> 所有配置文件：</li></ol><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">rm -rf $HOME/.tool-versions $HOME/.asdfrc</span></span>
<span class="line"></span></code></pre></div></details><p>恭喜你完成了 🎉</p>`,11);function W(X,ss){const d=o("RouterLink"),n=o("ExternalLinkIcon");return r(),p("div",null,[h,u,y,s("p",null,[a("请查看 "),e(d,{to:"/zh-hans/guide/getting-started.html"},{default:t(()=>[a("快速上手")]),_:1}),a(" 了解更多详情。")]),m,c(" TODO: expand on this with example "),f,c(" TODO: expand on this with example "),v,s("p",null,[a("这将为某个包的当前版本重新创建垫片。默认情况下，垫片是在某个工具安装的过程中由插件创建。一些工具像 "),s("a",b,[a("npm 命令行"),e(n)]),a(" 允许全局安装可执行程序，比如使用 "),g,a(" 命令安装 "),s("a",_,[a("Yarn"),e(n)]),a("。因为这个可执行程序不是通过插件生命周期安装的，所以还没有对应的垫片存在。"),k,a(" 命令将会强制重新计算任何新可执行程序的垫片，类似 "),x,a(" 的 "),E,a(" 版本下的 "),$,a("。")]),D,s("p",null,[a("例如，"),s("a",H,[a("Node.js"),e(n)]),a(" 附带了两个可执行程序，"),O,a(" 和 "),M,a("。当使用 "),s("a",A,[w,e(n)]),S,a("shim-versions` 命令会返回：")]),R,s("table",null,[B,s("tbody",null,[I,T,s("tr",null,[j,s("td",null,[a("下载一个新的 "),G,a(" 并且重新编译 "),q,a(" 或者使用你习惯的 "),s("a",z,[a("AUR helper"),e(n)])]),C])])]),N,s("details",P,[Z,s("p",null,[a("补全功能可能已经如 "),s("a",L,[a("Homebrew 的指南"),e(n)]),a(" 那样配置了，因此请按照他们的指南找出要删除的内容。")]),V]),s("details",U,[K,s("p",null,[a("补全功能可能已经如 "),s("a",Y,[a("Homebrew 的指南"),e(n)]),a(" 那样配置了，因此请按照他们的指南找出要删除的内容。")]),J]),Q])}const ls=i(F,[["render",W],["__file","core.html.vue"]]);export{ls as default};
