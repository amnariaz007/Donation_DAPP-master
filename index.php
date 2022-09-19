<?php

    class RecursiveUniqueSubsequence {
        $n = 0;
        $a[];
        $long mod = (long) (1e9) + 7L;
        long dp[][];

        public void solve() 
        {
            int t = in.nextInt();
            while (t--> 0) 
            {
                n = in.nextInt();
                a = in.next().toCharArray();
                dp = new long[n][26];
                for (long x[] : dp) Arrays.fill(x, -1);
                System.out.println(solve(0, 0));
            }
        }

      private long solve(int idx, int nxt) {
          if (idx == n) { 
              if (nxt == 26) return 1L;
              else return 0L;
          }
          if (nxt == 26) return 1L;
          if (dp[idx][nxt] != -1) return dp[idx][nxt];
          long ans = solve(idx + 1, nxt);
          int val = a[idx] - 'a';
          if (val == nxt) {
              ans = (ans + solve(idx + 1, nxt + 1)) % mod;
          }
          return dp[idx][nxt] = ans;
      }

  }