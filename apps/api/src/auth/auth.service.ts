import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from './user.model';

class AuthService {
  private static readonly JWT_EXPIRATION = '1d';

  public async register(userData: { email: string; password: string }): Promise<User> {
    const hashedPassword = await this.hashPassword(userData.password);
    const user = await User.create({
      id: this.generateUserId(),
      email: userData.email,
      password: hashedPassword,
      role: 'USER',
    });
    return user;
  }

  public async login(credentials: { email: string; password: string }): Promise<string> {
    const user = await this.findUserByEmail(credentials.email);
    if (!user || !(await this.verifyPassword(credentials.password, user.password))) {
      throw new Error('Invalid credentials');
    }
    return this.generateToken(user);
  }

  private async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  private generateUserId(): number {
    return new Date().getTime();
  }

  private async findUserByEmail(email: string): Promise<User | null> {
    return User.findOne({ where: { email } });
  }

  private async verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }

  private generateToken(user: User): string {
    return jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: AuthService.JWT_EXPIRATION }
    );
  }
}

export default AuthService;
