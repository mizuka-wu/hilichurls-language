# 娱乐项目

翻译请以官方为准

## 如何获取最新的词典

### [从b站wiki直接转](https://wiki.biligame.com/ys/%E7%8E%B0%E4%BB%A3%E4%B8%98%E4%B8%98%E8%AF%AD%E8%AF%8D%E5%85%B8)

```javascript
      Array.from(document.querySelector('.toc-sticky').childNodes)
        .slice(1)
        .filter(item => item.tagName !== 'H2')
        .reduce((directoryList, node) => {
          switch (node.tagName) {
            case 'P': {
              break
            }
            case 'DIV': {
              directoryList.push({
                text: node.innerText
              })
              break
            }
            case 'UL': {
              const latest = directoryList[directoryList.length - 1]
              latest.meaning = Array.from(node.childNodes)
                .map(subNode => subNode.innerText)
                .filter(item => item)
              break
            }
            default: {
              break
            }
          }

          return directoryList
        }, [])
        .reduce((directory, { text, meaning }) => {
          directory[text.toLowerCase()] = meaning
          directory[text] = meaning
          return directory
        }, {})
```

### 从丘丘语百科

[丘丘语百科](https://chen_zhanming.gitee.io/hilipedia/)
