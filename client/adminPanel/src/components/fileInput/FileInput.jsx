const FileInput = ({ name, value, handleChange }) => {

  return value ? (
    <>
      <div className="property img-selected">Image Selected</div>
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
