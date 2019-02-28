using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using AttachMore.NextGen.Infrastructure.DataAccess.EntityModel;
using AttachMore.NextGen.Infrastructure.DataAccess.EntityModel.Account;
using AttachMore.NextGen.Infrastructure.DataAccess.EntityModel.Attachment;
using Microsoft.EntityFrameworkCore;

namespace AttachMore.NextGen.Infrastructure.DataAccess.Context
{
    /// <summary>
    /// NextGen Context Class
    /// </summary>
    /// <seealso cref="System.Data.Entity.DbContext" />
    public class NextGenContext : DbContext
    {
        public NextGenContext(DbContextOptions<NextGenContext> options)
            : base(options)
        {
        }

        /// <summary>
        /// Gets or sets the user.
        /// </summary>
        /// <value>
        /// The user.
        /// </value>
        public DbSet<User> Users { get; set; }

        /// <summary>
        /// Gets or sets the role.
        /// </summary>
        /// <value>
        /// The role.
        /// </value>
        public DbSet<Role> Roles { get; set; }

        /// <summary>
        /// Gets or sets the user role.
        /// </summary>
        /// <value>
        /// The user role.
        /// </value>
        public DbSet<UserRole> UserRoles { get; set; }

        /// <summary>
        /// Gets or sets the files.
        /// </summary>
        /// <value>
        /// The files.
        /// </value>
        public DbSet<Files> Files { get; set; }

        /// <summary>
        /// Gets or sets the attachments.
        /// </summary>
        /// <value>
        /// The attachments.
        /// </value>
        public DbSet<Attachments> Attachments { get; set; }

        /// <summary>
        /// Gets or sets the attachment expiry settings.
        /// </summary>
        /// <value>
        /// The attachment expiry settings.
        /// </value>
        public DbSet<AttachmentExpirySettings> AttachmentExpirySettings { get; set; }

        /// <summary>
        /// Gets or sets the attachment security settings.
        /// </summary>
        /// <value>
        /// The attachment security settings.
        /// </value>
        public DbSet<AttachmentSecuritySettings> AttachmentSecuritySettings { get; set; }

        /// <summary>
        /// Gets or sets the attachment notification settings.
        /// </summary>
        /// <value>
        /// The attachment notification settings.
        /// </value>
        public DbSet<AttachmentNotificationSettings> AttachmentNotificationSettings { get; set; }

        /// <summary>
        /// Gets or sets the downloads.
        /// </summary>
        /// <value>
        /// The downloads.
        /// </value>
        public DbSet<Download> Downloads { get; set; }

        /// <summary>
        /// Gets or sets the file logs.
        /// </summary>
        /// <value>
        /// The file logs.
        /// </value>
        public DbSet<Logs> Logs { get; set; }
    }
}
