const download = (filename, filedata, file_type) =>{
    const download_anchor = document.createElement('a');
    const download_object = new Blob([`${filedata}`], {type : file_type})
    download_anchor.href = URL.createObjectURL(download_object);
    download_anchor.download = `${filename}`;
    download_anchor.click();
  }