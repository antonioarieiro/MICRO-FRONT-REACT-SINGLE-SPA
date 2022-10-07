import { Web3Storage } from 'web3.storage';
const client = new Web3Storage({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDAwMkNmZDQwODk4MDIxYjM3NjEyM2JCQzM2ODFjZGY0ZjYzNGNCNmYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTU3NDcwODg2MzUsIm5hbWUiOiJraW5lIn0.mYQr8qJyrk_BEKrcOiNoE2EEo_aDeP99Tkstu0KOWW0' });

const uploadNewFile = async (fileInput, image) => {
  if (image) {
    await client.put(fileInput, {
      name: 'kine-image'
    }).then((res) => console.log(res))
  }
  else if (!image) {
    await client.put(fileInput, {
      name: 'kine-movie'
    }).then((res) => console.log(res))

  }
}

export const _web3 = {
  uploadNewFile
};
