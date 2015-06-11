import java.io.*;
class test{
public static void main(String args[]) throws IOException {
  FileReader  in = null; 
  FileWriter  out = null; 
  try { 
    in = new FileReader ("a.txt"); 
    out = new FileWriter ("b.txt"); 
    int ch; 
    while ((ch = in.read()) != -1) 
      out.write(ch); 
  } finally {	
    in.close();
    out.close();	
  } 
}  




}
class student implements Serializable {
	private String name;
	private String sex;
	private String className;
  public student(String n, String s, String cn){
    name = n;
    sex = s;
    className = cn;
  }
  public String toString(){
    return name + " " + sex + " " + className + "\n";
  }
}
