public class Main {

    // Method overloading
    public static int sum(int a) {
        return a;
    }

    public static int sum(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {

        int res1 = sum(1);
        System.out.println(res1);

        int res2 = sum(1, 2);
        System.out.println(res2);
    }
}
