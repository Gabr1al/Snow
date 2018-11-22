function openwindow(link)
{
  windwow.open(link);
  
  return false;
  
}

function closewindow()
{
  open(location, '_self').close();
  
  return false;
  
}

function sleep(ms)
{
  var start = new Date().getTime();
  for (var i = 0; i<1e7; i++)
  {
    if ((new Date().getTime() - start) > ms)
    {
      break;
    }
  }
}
