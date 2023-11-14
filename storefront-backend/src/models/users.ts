import { QueryResult } from "pg";
import { client } from "../database";
import bcrypt from "bcrypt";

class User {
  id!: string;
  first_name!: string;
  last_name!: string;
  password!: string;
  username!: string;

  /**
   * Create a new user.
   * @param {string} firstName - The first name of the user.
   * @param {string} lastName - The last name of the user.
   * @param {string} password - The user's password.
   * @returns {Promise<number | null>} The ID of the newly created user or null on error.
   */
  static async createUser(
    firstName: string,
    lastName: string,
    username: string,
    password: string
  ): Promise<number | null> {
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password with a salt factor of 10
    const query =
      "INSERT INTO users (first_name, last_name, username, password) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [firstName, lastName, username, hashedPassword];

    try {
      const result: QueryResult = await client.query(query, values);
      return result.rows[0]?.id || null;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get a user by their ID.
   * @param {number} userId - The ID of the user to retrieve.
   * @returns {Promise<User | null>} The user object or null if not found.
   */
  static async getUserById(userId: number): Promise<User | null> {
    const query = "SELECT * FROM users WHERE id = $1";
    const values = [userId];

    try {
      const result: QueryResult = await client.query(query, values);
      return result.rows[0] || null;
    } catch (error) {
      throw error;
    }
  }

  static async getUserByUsername(username: string): Promise<User | null> {
    const query = "SELECT * FROM users WHERE username = $1";
    const values = [username];

    try {
      const result: QueryResult = await client.query(query, values);
      return result.rows[0] || null;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get a list of all users from the database.
   * @returns {Promise<QueryResult>} A Promise that resolves with the query result.
   */
  static async getUsers(): Promise<QueryResult> {
    try {
      // Query to fetch all users from the database
      const query = "SELECT * FROM users";
      const result = await client.query(query);
      return result;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get the current user's orders by user ID.
   * @param {number} userId - The ID of the user.
   * @returns {Promise<QueryResult>} A Promise that resolves with the query result.
   */
  static async getCurrentUserOrders(userId: number): Promise<QueryResult> {
    try {
      // Query to fetch current user's orders from the database based on user ID
      const query = "SELECT * FROM orders WHERE user_id = $1";
      const result = await client.query(query, [userId]);
      return result;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get completed orders by user ID.
   * @param {number} userId - The ID of the user.
   * @returns {Promise<QueryResult>} A Promise that resolves with the query result.
   */
  static async getCompletedUserOrders(userId: number): Promise<QueryResult> {
    try {
      // Query to fetch completed orders for the user from the database based on user ID
      const query = "SELECT * FROM orders WHERE user_id = $1 AND status = $2";
      const result = await client.query(query, [userId, "completed"]);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

export { User };
