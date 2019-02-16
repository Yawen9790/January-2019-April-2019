import java.util.Scanner;

public class Task3 {
	static Scanner input = new Scanner(System.in);
	
	//2
	public static String getCard() { //string to count digit
		System.out.print("Enter a credit card number as a long interger: ");	
		String card = input.next();	
		return card;
	}
	
	//3
	public static int single(String pcard) {
		int ssum = 0, temp = 0;
		
		for (int i = 0; i < pcard.length(); i++) {
			if((i % 2) == 0) {
				if((pcard.charAt(i) * 2) < 10) {
					ssum += 2 * pcard.charAt(i);
				}
				else {
					temp = pcard.charAt(i) * 2 - 9;
					ssum += temp;					
				}
			}
		}
		return ssum;
	}
	
	//4
	public static int odd(String pcard) {
		int osum = 0;
		
		for (int i = 0; i < pcard.length(); i++) {
			if((i % 2) != 0) {	
				osum += pcard.charAt(i);
			}
		}
		
		return osum;
	}
	
	//5
	public static boolean prefix(String pcard) {	
		if(pcard.charAt(0)==4 || pcard.charAt(0)==5
				||pcard.charAt(0)==6 
				|| (pcard.charAt(0)==3 
				&& pcard.charAt(0)==7)) {
			return true;
		}
		return false;
	}
	
	//6
	public static int totalsum(String pcard) {
		int total = 0;
		
		total += single(pcard) + odd(pcard);
		
		return total;
	}

	//7
	//?
	
	//1
	public static boolean valid(String pcard) {
		if (prefix(pcard) == true) {
			if (totalsum(pcard) % 10 == 0) {	
				return true;
			}
		}
		return false;
	}
	
	public static void main(String[] args) {	
		String card = getCard();
		boolean valid = valid(card);
		
		if (valid == true) {
			System.out.print(card + " is valid");	
		}
		else {
			System.out.print(card + " is invalid");				
		}		
	}
}
