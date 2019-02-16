import java.util.Scanner;
 
public class Task1 {
	//since I write a class which also need ewad input
	//scanner have to be move out of main
	static Scanner input = new Scanner(System.in);//???
	
	static String[] words = { "write", "that", "program", "test"};
 
	//public static void main(String[] args) {
		public static void Program() {
			int num = (int) (Math.random() * 5);
			
			String str = words[num];
			
			int n = Guess(str);
			
			System.out.println("The word is " + str + ". You missed " + n + " time.\n");
		//}
		
			while(true) {
				System.out.print("Do you want to guess for another word? Enter y or n>");	
				
				String s = input.next();
				
				if (s.equals("n") || s.equals("N")) {
					System.out.println("Game over!");
					//need toe exit to the loop
					break;
				}
				else if	(s.equals("y") || s.equals("Y")) {
					Program();
				}
			}
	}
 	
	static int Guess(String str) {
		int count = 0;
				
		int number = str.length();
		
		char[] star = new char[number];//str.length()];//String?
		
		for (int i = 0; i < number; i++) {
			star[i] = '*';
		}
		
		while (true) {
			System.out.print("(Guess) Enter a letter in word ");			
			
			for (int i = 0; i < str.length(); i++) {
				System.out.print(star[i]);
			}
			
			System.out.print(" > ");
			
			String letter = input.next();
			
			boolean tester = false;
			
			for (int i = 0; i < str.length(); i++) {
				
				if (star[i] == letter.charAt(0)) { //String?
					System.out.println("    " + letter + " is already in the word");
					tester = true;
				} 
				else if (str.charAt(i) == letter.charAt(0)) {
					star[i] = letter.charAt(0);
					number--;
					tester = true;
				}
			}
			
			if (tester == false) {
				System.out.println("\t" + letter + " is no in the word");
				count++;
			}
			if (number == 0) {
				break;
			}
		}
		
		return count;//numebr;
	}
 
	public static void main(String[] args) {
		Program();
	}
}
//}

//public class Task1 {
//	// maybe we can use separate class to complete this?
//	// a "user" class and a "game" class?
//	// each one control a set of string and than invoke to compare?
//
//	public static void main(String[] args) {
//		Scanner input = new Scanner(System.in);
//		
//		String[] words = {"write", "that", "program", "test"};
//		
//		int number = (int)(Math.random() * 4); //type casting
//		
//		String str = words[number];	
//		
//		int count = 0;
//				
//		String gameStatus; //why cannot be type char?
//		
//		String letter;
//		
//		// using the star mark to instead the original word
//		int length= str.length();
//		
//		char[] star = new char[length];
//		
//		for (int i = 0; i < length; i++) {
//			star[i] = '*'; //'' need single quotation?
//		}
//				
//		//game start
//		if(length == 0) {
//			//vcannot use break
//			//break;
//			System.out.println("The word is " + str + ". You missed " + count + " time");
//			System.out.println("Do you want to guess another word? Enter y or n > " );
//			gameStatus = input.next(); // has no next char?
//			
//			/*if() {
//				// other character than y and n 
//				// not required
//			}
//			else if (){
//				// Y || y
//				// not required
//			}
//			*/
//			if (gameStatus.equals("n") || gameStatus.equals("N")) {
//				//cancnot use break
//				//break;
//				System.out.println("End of the game");
//
//			}
//		}
//		else {		
//			System.out.print("(Guess) Enter a letter in word ");
//			
//			for (int i = 0; i < length; i++) {
//				System.out.print(star[i]);
//			}
//		
//			System.out.print(" >");
//		
//			//read user input
//			letter = input.next();
//				
//			//compare with the original string		
//			for(int i = 0; i < length; i++) {
//			
//				if(star[i] == letter.charAt(0)) {
//					//star[i].equals(letter.charAt(0)){//?why this status is not correct?
//				
//					System.out.println( "	" + letter + " is already in the word");
//				
//					count = 1;
//			
//				}
//				else if( str.charAt(i) == letter.charAt(0)) {
//				
//					star[i] = letter.charAt(0);
//				
//					length --;
//				
//					count = 1;
//			
//				}
//				else {
//					count = 0;
//				}
//		
//			}
//		
//		
//			if(count == 0) {
//			
//				System.out.println( "\t" + letter + " is not in the word");
//			
//				count ++;
//		
//			}
//	
//		}
//	}
//}

		
		
	
	
