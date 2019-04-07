const style = `:root {
  --themeColor: rgb(12, 139, 186);
  --highlightColor: rgba(12, 139, 186, .4);
  --selectionColor: rgba(0, 0, 0, .1);
  --editorColor: rgba(101, 101, 101, .8);
  --editorColor50: rgba(101, 101, 101, .5);
  --editorColor30: rgba(101, 101, 101, .3);
  --editorColor10: rgba(101, 101, 101, .1);
  --editorColor04: rgba(101, 101, 101, .04);
  --editorBgColor: #f3f3f3;
  --deleteColor: #ff6969;
  --iconColor: rgba(101, 101, 101, .8);
  --codeBgColor: #d8d8d869;
  --codeBlockBgColor: rgba(12, 139, 186, .04);

  --sideBarColor: rgba(101, 101, 101, .6);
  --sideBarTitleColor: rgba(101, 101, 101, 1);
  --sideBarTextColor: rgba(101, 101, 101, .4);
  --sideBarBgColor: rgba(248, 248, 248, 0.9);
  --sideBarItemHoverBgColor: rgba(101, 101, 101, .03);
  --itemBgColor: rgba(245, 245, 245, 0.6);
  --floatBgColor: #ffffff;
  --floatHoverColor: rgba(101, 101, 101, .04);
  --floatBorderColor: rgba(0, 0, 0, .03);
  --maskColor: rgba(255, 255, 255, .7);
  --editorAreaWidth: 700px;
}

.editor-tabs {
  box-shadow: none !important;
}

.tabs-container > li:not(:last-child) {
  border-right: 1px solid #e5e5e5 !important;
  background: var(--editorBgColor) !important;
}

/* ------------------------------------ */

h1, h2, h3, h4, h5, h6 {
  color: var(--themeColor);
  text-align: center;
}

li.bullet-list-item {
  position: relative;
  list-style: none;
}
li.bullet-list-item::before {
  content: '';
  display: block;
  position: absolute;
  width: 5px;
  height: 2px;
  left: -18px;
  top: 15px;
  background: var(--editorColor);
}

blockquote.paragraph {
  background: rgb(233, 233, 233);
}
blockquote.paragraph::before {
  content: none;
}

li.paragraph {
  color: var(--editorColor);
}

/*task list*/
li.task-list-item {
  list-style-type: none;
  position: relative;
}
li.task-list-item > input[type=checkbox] {
  position: absolute;
  cursor: pointer;
  width: 16px;
  height: 16px;
  margin: 4px 0px 0px;
  top: 2px;
  left: -22px;
  transform-origin: center;
  transform: rotate(-90deg);
  transition: all .2s ease;
}
li.task-list-item > input[checked] {
  transform: rotate(0);
  opacity: .5;
}
li.task-list-item > input[type=checkbox]::before {
  content: '';
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  display: inline-block;
  border: 2px solid var(--editorColor);
  border-radius: 2px;
  background-color: var(--editorBgColor);
  position: absolute;
  top: 0;
  left: 0;
  transition: all .2s ease;
}
li.task-list-item > input[checked]::before {
  border: transparent;
  background-color: var(--editorColor);
}
li.task-list-item > input::after {
  content: '';
  transform: rotate(-45deg) scale(0);
  width: 9px;
  height: 5px;
  border: 2px solid #fff;
  border-top: none;
  border-right: none;
  position: absolute;
  display: inline-block;
  top: 1px;
  left: 5px;
  transition: all .2s ease;
}
li.task-list-item > input[checked]::after {
  transform: rotate(-45deg) scale(1);
}

/*horizontal line*/
p:not(.active)[data-role="hr"]::before {
  content: '';
  position: absolute;
  width: 50%;
  display: block;
  left: 50%;
  top: 50%;
  height: 2px;
  box-sizing: border-box;
  border-bottom: 2px dashed var(--editorColor50);
  transform: translateX(-50%) translateY(-50%);
}
`

export default style
