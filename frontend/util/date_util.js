  
  export const formatTime = date => {
    const obj = new Date(date);
    let hours = obj.getHours() % 12;
    const fullHours = obj.getHours()
    if (hours === 0) hours = 12;
    const minutes = obj.getMinutes();
    const temp = `0${minutes}`;
    const fullMinutes = temp.slice(temp.length - 2);
    const ampm = fullHours < 12 || fullHours === 0 ? 'AM' : 'PM';
    return `${hours}:${fullMinutes}${ampm}`;
  };
