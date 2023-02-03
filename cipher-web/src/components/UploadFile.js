function FileUpload({setText, setFileType}) {

  const handleFileRead = (e) => {
    setText(e.target.result);
  };

  const handleFileChosen = (file) => {
    const reader = new FileReader();
    reader.onloadend = handleFileRead;
    if (file.type === 'text/plain') {
        reader.readAsText(file);
    }
    else {
        reader.readAsBinaryString(file);
        setFileType(file.type);
    }
  };

  return (
    <div>
      <input type="file" onChange={(e) => handleFileChosen(e.target.files[0])} />
    </div>
  );
}

export default FileUpload;