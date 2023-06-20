using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace CrudApplication
{
    public partial class Form1 : Form
    {
        private SqlConnection connection;
        public Form1()
        {
            InitializeComponent();
            // SQL Server connection string
            string connectionString = "Data Source=LAPTOP-VM83IEGL\\SQLEXPRESS03;Initial Catalog=CrudApplication;Integrated Security=True;Pooling=False";
            connection = new SqlConnection(connectionString);
        }
        // Method to insert a person into the database
        private void InsertPerson(string firstName, string lastName, int age, string email, string phone)
        {
            string query = "INSERT INTO Persons (FirstName, LastName, Age, Email, Phone) VALUES (@FirstName, @LastName, @Age, @Email, @Phone)";
            SqlCommand command = new SqlCommand(query, connection);
            command.Parameters.AddWithValue("@FirstName", firstName);
            command.Parameters.AddWithValue("@LastName", lastName);
            command.Parameters.AddWithValue("@Age", age);
            command.Parameters.AddWithValue("@Email", email);
            command.Parameters.AddWithValue("@Phone", phone);

            connection.Open();
            command.ExecuteNonQuery();
            connection.Close();

            MessageBox.Show("Person inserted successfully.");
        }

        // Method to update a person in the database
        private void UpdatePerson(int personID, string firstName, string lastName, int age, string email, string phone)
        {
            string query = "UPDATE Persons SET FirstName = @FirstName, LastName = @LastName, Age = @Age, Email = @Email, Phone = @Phone WHERE ID = @PersonID";
            SqlCommand command = new SqlCommand(query, connection);
            command.Parameters.AddWithValue("@FirstName", firstName);
            command.Parameters.AddWithValue("@LastName", lastName);
            command.Parameters.AddWithValue("@Age", age);
            command.Parameters.AddWithValue("@Email", email);
            command.Parameters.AddWithValue("@Phone", phone);
            command.Parameters.AddWithValue("@PersonID", personID);

            connection.Open();
            command.ExecuteNonQuery();
            connection.Close();

            MessageBox.Show("Person updated successfully.");
        }

        // Method to delete a person from the database
        private void DeletePerson(int personID)
        {
            string query = "DELETE FROM Persons WHERE ID = @PersonID";
            SqlCommand command = new SqlCommand(query, connection);
            command.Parameters.AddWithValue("@PersonID", personID);

            connection.Open();
            command.ExecuteNonQuery();
            connection.Close();

            MessageBox.Show("Person deleted successfully.");
        }

        // Method to load and display all persons from the database
        private void LoadPersons()
        {
            string query = "SELECT * FROM Persons";
            SqlDataAdapter adapter = new SqlDataAdapter(query, connection);
            DataTable dataTable = new DataTable();

            adapter.Fill(dataTable);

            dataGridView1.DataSource = dataTable;
        }

        // Method to validate the input fields
        private bool ValidateFields()
        {
            if (string.IsNullOrEmpty(txtFirstName.Text))
            {
                MessageBox.Show("Please enter the first name.");
                return false;
            }

            if (string.IsNullOrEmpty(txtLastName.Text))
            {
                MessageBox.Show("Please enter the last name.");
                return false;
            }

            if (!int.TryParse(txtAge.Text, out int age) || age <= 0)
            {
                MessageBox.Show("Please enter a valid age.");
                return false;
            }

            if (!IsValidEmail(txtEmail.Text))
            {
                MessageBox.Show("Please enter a valid email address.");
                return false;
            }

            if (string.IsNullOrEmpty(txtPhone.Text))
            {
                MessageBox.Show("Please enter the phone number.");
                return false;
            }

            return true;
        }

        // Method to validate the email address using a regular expression
        private bool IsValidEmail(string email)
        {
            // Regular expression pattern for email validation
            string pattern = @"^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$";
            return System.Text.RegularExpressions.Regex.IsMatch(email, pattern);
        }


        private void panel2_Paint(object sender, PaintEventArgs e)
        {

        }

        private void textBox4_TextChanged(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            if (ValidateFields())
            {
                string firstName = txtFirstName.Text;
                string lastName = txtLastName.Text;
                int age = int.Parse(txtAge.Text);
                string email = txtEmail.Text;
                string phone = txtPhone.Text;

                InsertPerson(firstName, lastName, age, email, phone);
                LoadPersons();
            }
        }

        private void button2_Click(object sender, EventArgs e)
        {
            if (ValidateFields())
            {
                int personID = int.Parse(txtID.Text);
                string firstName = txtFirstName.Text;
                string lastName = txtLastName.Text;
                int age = int.Parse(txtAge.Text);
                string email = txtEmail.Text;
                string phone = txtPhone.Text;

                UpdatePerson(personID, firstName, lastName, age, email, phone);
                LoadPersons();
            }
        }

        private void button3_Click(object sender, EventArgs e)
        {
            if (int.TryParse(txtID.Text, out int personID))
            {
                DeletePerson(personID);
                LoadPersons();
            }
            else
            {
                MessageBox.Show("Invalid Person ID. Please enter a valid integer value.");
            }
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            LoadPersons();
        }
    }
    }

