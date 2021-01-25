export const cloudinaryService = {
    uploadImg
}


async function uploadImg(ev) {
    const CLOUD_NAME = "tair"
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
    const UPLOAD_PRESET = "zgpktlvr"

    const formData = new FormData();
    formData.append('file', ev.target.files[0])
    formData.append('upload_preset', UPLOAD_PRESET);
    try {
        const res = await fetch(UPLOAD_URL, {
            method: 'POST',
            body: formData
        })
        const data = await res.json()
        console.log(data);
        return data

    } catch (err) {
        console.log(err);
    }
}
