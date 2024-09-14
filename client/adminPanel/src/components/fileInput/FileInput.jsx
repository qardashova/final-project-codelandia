import { useEffect , useState} from "react";


const FileInput = ({ name, value, handleChange }) => {
  const [fileBase64, setFileBase64] = useState("");

  useEffect(() => {
    const file = value;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFileBase64(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }, [value]);

  return value ? (
    <>
      <div className="property img-selected">Image Selected</div>
      <img
        src={fileBase64}
        alt=""
        width={"100%"}
        style={{ margin: "10px 0 " , maxHeight: "350px"}}
      />
    </>
  ) : (
    <label className="property file-input-wrapper">
      Choose Image File
      <input
        type="file"
        name={name}
        value={value}
        id=""
        className="file-input"
        onChange={handleChange}
      />
    </label>
  );
};

export default FileInput;
