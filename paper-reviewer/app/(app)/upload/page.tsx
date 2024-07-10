
export default function Upload() {
  return (
   
      <div style={{display:"flex", flexDirection:"row", padding:20 }}>

        <label >Upload a file</label>

        <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />

      </div>

  );
}
