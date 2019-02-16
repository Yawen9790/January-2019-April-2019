////import java.text.NumberFormat;
//import java.text.DecimalFormat;
import java.util.Scanner;

public class Task3 {
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);

		System.out.print("Loan Amount: ");
		double loan = input.nextDouble();
		
		System.out.print("Number of Years: ");
		int years = input.nextInt();
		
		System.out.print("Annual Interest Rate: ");
		double yrate = input.nextDouble();

		double mrate = yrate / 1200;
		double mp = loan * mrate / (1 - 1 / Math.pow(1 + mrate, years * 12));
		
//      DecimalFormat df = new DecimalFormat("0.00");
		
		System.out.printf("Monthly Payment: %.2f\n", mp);// df.format(mp));
		System.out.printf("Total Payment: %.2f\n", (mp * 12) * years);

		double bal = loan;
		double pr, interest;
		System.out.println("\nPayment#     Interest     Principal     Balance");
		
		for (int i = 1; i <= years * 12; i++) {
			interest = mrate * bal;
			pr = mp - interest;
			bal -= pr;
			
//    	    System.out.print(i + "		" +		interest	pr	bal");
			//format method
			System.out.printf("%-13d%-13.2f%-13.2f%.2f\n", i, interest, pr, bal);
		}
	}
}



