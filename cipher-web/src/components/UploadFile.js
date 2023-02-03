function FileUpload({setText}) {

  const handleFileRead = (e) => {
    setText(e.target.result);
  };

  const handleFileChosen = (file) => {
    const reader = new FileReader();
    reader.onloadend = handleFileRead;
    reader.readAsText(file);
  };

  return (
    <div>
      <input type="file" onChange={(e) => handleFileChosen(e.target.files[0])} />
      {/* <div>{fileContent}</div> */}
    </div>
  );
}

export default FileUpload;