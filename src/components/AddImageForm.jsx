import { useEffect, useRef } from 'react'
import { getAllImages, startUploadFiles } from '../utils/fileManager';
import { useAuthStore } from '../hooks/useAuthStore';

export const AddImageForm = () => {
  const { user } = useAuthStore()
  const onFileInputChange = async ({ target }) => {
    if (target.files === 0) return;

    const path = await startUploadFiles(target.files)
    console.log(path);
  };
  useEffect(() => {
    getAllImages(user.email)
  }, [])
  
  const fileInputRef = useRef();
  return (
    <>
      <div>
        <input
          type="file"
          multiple
          ref={fileInputRef}
          onChange={onFileInputChange}
          style={{ display: "none" }}
        />
        <button
          color="primary"
          onClick={() => {
            fileInputRef.current.click();
          }}
        >
          Haga clic aca para subir una imagen
        </button>
      </div>
    </>
  )
}
