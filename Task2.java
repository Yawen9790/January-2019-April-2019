import java.util.Scanner;

public class Task2{
	public static void main(String[] args) {
		
        Scanner input = new Scanner(System.in);

        System.out.print("Enter year (e.g., 2012): ");
        int year = input.nextInt();

        System.out.print("Enter month: 1-12: ");
        int month = input.nextInt();

        System.out.print("Enter the day of the month: 1-31: ");
        int day = input.nextInt();

        double j = year / 100;  
        double k = year % 100;
        double h = (day + 26*(month+1)/10 + k + k/4 + j/4 + 5*j)%7;

        String result = "Day of the week is ";

        //
        if (h == 0) 
            System.out.print(result + "Monday");
        else if (h == 1)
            System.out.print(result + "Tuesday");
        else if (h == 2)
            System.out.print(result + "wednsday");
        else if (h == 3)
            System.out.print(result + "Thurday");
        else if (h == 4)
            System.out.print(result + "Friday");
        else if (h == 5)
            System.out.print(result + "Saturday");
        else
            System.out.print(result + "Sunday");
    }
}