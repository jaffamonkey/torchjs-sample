const uitest = require('uitest');

uitest({
    url: 'file:///Users/jaffamonkey/projects/torchjs-sample/test/test.html',
    width: 600,
    height: 480,
    hidpi: false,
    useContentSize: true,
    show: false,
}).then(() => {
    console.log('uitest success')
}).catch(() => {
    console.log('uitest error')
});