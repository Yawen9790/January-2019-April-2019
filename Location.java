//import java.nio.file.LinkOption;
import java.util.Scanner;

//to avoid create another location class,
//i change the file name to location
//public class Task2 {
//class Location{
//public int row, column;
//public double maxValue;
//
//public Location() {
//	row = 0;
//	column = 0;
//	maxValue = 0.0;
//} 
//}
public class Location {
	public int row,column;
	public double maxValue;
	
	public static Location locateLargest(double[][] a) {
		Location l = new Location();
		l.maxValue = a[0][0];
		l.row = 0;
		l.column = 0;
		for(int i = 0;i < a.length;i++){
			for(int j = 0;j < a[i].length;j++){
				if(l.maxValue < a[i][j]){
					l.maxValue = a[i][j];
					l.row = i;
					l.column = j;
				}
			}
		}
		return l;	
	}
//	//stream & reduce? IntStraam.range().reduce(()-> ?:) (int)	
	public static void main(String[] args){
		Scanner input = new Scanner(System.in);
		
		
		//do{
		//try {
		//while(true) {	
		System.out.println("Enter the number of rows and columns of the array: ");
		
		int r = input.nextInt();
		String c = input.next();
		
		//parse type
		int intr = (int)r;//Integer.parseInt(r);
		int intc = Integer.parseInt(c);
		
		//check input type
		//if(input.hasNextInt()) {		
			//r = (int)input.nextInt();
			//c = (int)input.nextInt();
		//r = System.in.read();
		//if(r.isDigit())//
		//}
//		else {
//			System.out.println("Need integer!");
//			
//		}
		//}
		//}while(true);
		System.out.println("Enter the array: ");
		
		double[][] a = new double[intr][intc];
		
		for(int i = 0;i < intr;i++){
		
			for(int j = 0;j < intc;j++){
			
				a[i][j] = input.nextDouble();
			}
		}
		
//		locateLargest(Location());	

		System.out.print("The location of the largest element is " + 
		locateLargest(a).maxValue + " at " + "(" + 
		locateLargest(a).row+", "
		+locateLargest(a).column + ")");
	}

}
