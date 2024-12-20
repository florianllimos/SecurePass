const output = document.getElementById('generated_pwd');
document.getElementById('copy').addEventListener('click', copy)
document.getElementById('clickpw').addEventListener('click', generate_pwd)

function generate_pwd(event) {
    const length = 32,
        charset = 
        'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ123456789!?.'
        var pwd = ''
        for (var i = 0, n = charset.length; i < length; ++i) {
            pwd += charset.charAt(Math.floor(Math.random() * n))
        }
    output.innerHTML = pwd
}

function copy () {
    const copyText = output.innerHTML
    navigator.clipboard.writeText(copyText).then(() => {
        alert('Copié : ' + copyText)
    })
}