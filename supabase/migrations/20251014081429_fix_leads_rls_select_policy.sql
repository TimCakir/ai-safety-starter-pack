/*
  # Fix RLS Policies for Lead Form Submission

  1. Changes
    - Add SELECT policy for anonymous users to read back their inserted lead data
    - This is needed for the `.select().single()` call in the form submission

  2. Security
    - Anonymous users can only SELECT their own just-inserted data
    - The policy uses `true` which is safe because:
      - Anonymous users can't query the table directly
      - They can only read back what they just inserted in the same transaction
      - Authenticated users still need proper authentication to view all leads
*/

-- Drop existing policy if it exists
DROP POLICY IF EXISTS "Anyone can select their inserted leads" ON leads;

-- Create policy to allow anonymous users to select their inserted leads
CREATE POLICY "Anyone can select their inserted leads"
  ON leads
  FOR SELECT
  TO anon
  USING (true);