<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * CodeIgniter Calendar Class
 *
 * This class enables the creation of calendars
 *
 * @package		EgypTeam.CodeIgniter
 * @subpackage	Libraries
 * @category	Libraries
 * @author		EgypTeam
 * @link		http://www.egypteam.com
 */

class CI_Template {

	var $CI;
	var $themeName;
	var $dimensions;
	
	/**
	 * Constructor
	 *
	 * Loads the calendar language file and sets the default time reference
	 */
	public function __construct($config = array())
	{
		$this->CI =& get_instance();
		
		$this->themeName = "oxygen";
		$this->dimensions = "32x32";
	
		log_message('debug', "Template Class Initialized");
	}
	
	/**
	 * Returns an Icon path
	 *
	 * @access	public
	 * @param	name	Icon Name
	 * @return	string
	 */
	public function getIconPath($category = "",$name = "")
	{
		return base_url("resources/images/icons/" . $this->themeName . "/" . $this->dimensions . "/$category/$name.png");
	}
	
	/**
	 * Returns an Icon Tag
	 *
	 * @access	public
	 * @param	name	Icon Name
	 * @return	string
	 */
	public function getIconTag($category = "",$name = "",$size = 15)
	{
		return '<img width="15" src="' . $this->getIconPath($category,$name) . '"/>';
	}
	
}
?>