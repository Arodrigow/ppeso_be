export default function sanitizeUser(user: any) {
    const { password, token, updated_at, ...safeUser } = user;
    return safeUser;
}