import unittest

from divisao import divide


class TestOperations(unittest.TestCase):
    def test_divide(self):
        self.assertEqual(divide(10, 2), 5)

    def test_devide_by_0(self):
        with self.assertRaises(ZeroDivisionError):
            divide(5, 0)


if __name__ == '__main__':
    unittest.main()
