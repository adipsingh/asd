using AttachMore.NextGen.Core.DomainModels.Account;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AttachMore.NextGen.Core.IServices.Account
{
    /// <summary>
    /// IAccountService
    /// </summary>
    public interface IAccountService
    {
        /// <summary>
        /// Gets or sets the host.
        /// </summary>
        /// <value>
        /// The host.
        /// </value>
        string Host { get; set; }

        /// <summary>
        /// Gets or sets the scheme.
        /// </summary>
        /// <value>
        /// The scheme.
        /// </value>
        string Scheme { get; set; }

        /// <summary>
        /// Gets or sets the port.
        /// </summary>
        /// <value>
        /// The port.
        /// </value>
        int Port { get; set; }

        /// <summary>
        /// Gets the user information.
        /// </summary>
        /// <returns></returns>
        UserModel GetUserInfo(string email);

        /// <summary>
        /// Resets the passwrod.
        /// </summary>
        /// <param name="newPassword">The new password.</param>
        /// <param name="confirmPassword">The confirm password.</param>
        /// <param name="email">The email.</param>
        /// <returns></returns>
        string ResetPasswrod(string newPassword, string confirmPassword, string email);

        /// <summary>
        /// Forgots the password.
        /// </summary>
        /// <param name="email">The email.</param>
        string ForgotPassword(string email);
    }
}
