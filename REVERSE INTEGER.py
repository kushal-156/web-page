#x = 123
class Solution:
    def reverse(self, x: int) -> int:
        rev = 0
        sign = 1

        if(x < 0):
            sign = -1
            x = x * -1

        while(x > 0):

            a = x % 10
            rev = rev * 10 + a
            x = x // 10

        if not -2147483648 < rev < 2147483648:
            return 0
        return sign * rev
