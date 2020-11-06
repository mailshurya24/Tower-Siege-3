//creating a function for my own library
function hasCollided(lbullet,lwall)
{
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;

  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
    return false;
}
