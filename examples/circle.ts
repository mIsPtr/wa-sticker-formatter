import { Sticker } from '../src'
;(async () => {
    console.log('\n---\n')
    console.log('Circle example')
    console.log('---\n')
    const images = {
        static: {
            potrait: 'https://i.pinimg.com/originals/3a/53/d6/3a53d68345b56241a875595b21ec2a59.jpg',
            landscape: 'https://chasinganime.com/wp-content/uploads/2021/02/0_YgtEypuJ2QfMPCbn.jpg'
        },
        animated: {
            potrait: 'https://c.tenor.com/-1mtmQgH5eYAAAAC/watson-amelia-vtuber.gif',
            landscape: 'https://c.tenor.com/2RdLoyV5VPsAAAAC/ayame-nakiri.gif'
        }
    }
    const type = 'circle'
    const getOptions = (pack = '', author = '') => ({
        pack,
        type,
        author: `${author}-${type}`
    })
    await (async () => {
        console.log('Static Potrait')
        const sticker = new Sticker(images.static.potrait, getOptions('static', 'potrait'))
        await sticker.toFile()
        console.log(`Saved to ${sticker.defaultFilename}`)
    })()
    await (async () => {
        console.log('Static Landscape')
        const sticker = new Sticker(images.static.landscape, getOptions('static', 'landscape'))
        await sticker.toFile()
        console.log(`Saved to ${sticker.defaultFilename}`)
    })()
})()
