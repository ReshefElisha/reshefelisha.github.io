int numLines = 100;
int[][] lines = new int[numLines][5];
int b = 0;
void setup(){
  size($(window).width(),
    $(window).height());
  background(0);
  colorMode(RGB);
  stroke(255,255,0,1.5);
  for(int l = 0; l<numLines; l++){
    lines[l][0] = (int) random(width);
    lines[l][1] = (int) random(height);
    lines[l][2] = (int) random(width);
    lines[l][3] = (int) random(height);
    lines[l][4] = random(5);
  }
}
void draw(){
  background(0);
  for(int j = 0; j<numLines - 1; j++){
    line(lines[j][0],lines[j][1],lines[j][2],lines[j][3]);
    for(int i = 1; i<50;i++){
      int x1 = lines[j][0] + i*(lines[j+1][0]-lines[j][0])/50;
      int y1 = lines[j][1] + i*(lines[j+1][1]-lines[j][1])/50;
      int x2 = lines[j][2] + i*(lines[j+1][2]-lines[j][2])/50;
      int y2 = lines[j][3] + i*(lines[j+1][3]-lines[j][3])/50;
      line(x1,y1,x2,y2);
    }
    int[] rotLine = rotateLine(lines[j][0],lines[j][1],lines[j][2],lines[j][3],lines[j][4]);
    lines[j][0] = rotLine[0];
    lines[j][1] = rotLine[1];
    lines[j][2] = rotLine[2];
    lines[j][3] = rotLine[3];
    lines[j][4] = rotLine[4];
  }
  b++;
}
int[] rotateLine(int x1, int y1, int x2, int y2, int rot){
  int cX = x1 + (x2-x1)/2;
  int cY = y1 + (y2-y1)/2;
  x1 -= cX; x2 -= cX;
  y1-= cY; y2 -= cY;
  float r = radians(rot/10.0);
  float s = sin(r);
  float c = cos(r);
  int newX1 = (x1*c - y1*s) + cX;
  int newY1 = (x1*s + y1*c) + cY;
  int newX2 = (x2*c - y2*s) + cX;
  int newY2 = (x2*s + y2*c) + cY;
  int[] rl = new int[5];
  rl[0] = newX1; rl[1] = newY1; rl[2] = newX2; rl[3] = newY2; rl[4] = rot;
  return rl;
}


