import Kinet from 'kinet';
import axios from 'axios';

export function startMousePointer(){
    var kinet = new Kinet({
        acceleration: 0.03,
        friction: .2,
        names: ["x", "y"]
    });
    const circle = document.getElementById("circle");

    kinet.on('tick', (instances)=>{
    circle.style.transform = `translate3d(${(instances.x.current)}px,
    ${(instances.y.current)}px, 0) rotateX(${(instances.x.velocity/2)}deg)
    rotateY(${(instances.y.velocity/2)}deg)`;
});

    document.addEventListener('mousemove', e=>{
        kinet.animate('x', e.clientX - window.innerWidth/2);
        kinet.animate('y', e.clientY - window.innerHeight/2);
    })
};

export const uploadFile = async ()=>{
    const store = useUserStore();
    store.uploadStarted = true;
    const formData = new FormData();
    formData.append('file', store.uploadedFile);
    try{
        const { data } = await axios.post(`https://hp-share.onrender.com/api/files`, formData,{
            onUploadProgress: (progress)=>{
                const { loaded, total } = progress;
                const percentageCompleted = (loaded / total) * 100;
                store.uploadedPercentage = percentageCompleted.toFixed(2);

                if(percentageCompleted.toFixed(2) >= 100){
                    setTimeout(() => {
                        store.uploadedPercentage = 0;
                        store.uploadedFile = null;
                        store.uploadStarted = false;
                    }, 1000);
                }
            }
        });
        console.log(data);
        const cutUuid = data.file.split('/files')[1];
        store.downloadLink = `https://hp-share.onrender.com/files/download${cutUuid}`;
    }catch(e){
        console.log('Upload err', e);
        store.uploadedPercentage = 0;
        store.uploadedFile = null;
        store.uploadStarted = false;
        alert("Failed to upload the file!")
    }
}