export function decimalToBinary(num, k_prec)
    {
        let binary = "";
    
        // Fetch the integral part of decimal number
        let Integral = parseInt(num, 10);
    
        // Fetch the fractional part decimal number
        let fractional = num - Integral;
    
        // Conversion of integral part to
        // binary equivalent
        while (Integral > 0)
        {
            let rem = Integral % 2;
    
            // Append 0 in binary
            binary +=
            (String.fromCharCode(rem + '0'.charCodeAt()));
    
            Integral = parseInt(Integral / 2, 10);
        }
    
        // Reverse string to get original binary
        // equivalent
        binary = reverse(binary);
    
        // Append point before conversion of
        // fractional part
        binary += ('.');
    
        // Conversion of fractional part to
        // binary equivalent
        while (k_prec-- > 0)
        {
            // Find next bit in fraction
            fractional *= 2;
            let fract_bit = parseInt(fractional, 10);
    
            if (fract_bit == 1)
            {
                fractional -= fract_bit;
                binary +=
                String.fromCharCode(1 + '0'.charCodeAt());
            }
            else
            {
                binary +=
                String.fromCharCode(0 + '0'.charCodeAt());
            }
        }
    
        return binary;
    }
    
    function reverse(input)
    {
        let temparray = input.split('');
        let left, right = 0;
        right = temparray.length - 1;
    
        for (left = 0; left < right; left++, right--)
        {
            // Swap values of left and right
            let temp = temparray[left];
            temparray[left] = temparray[right];
            temparray[right] = temp;
        }
        return temparray.join("");
    }
